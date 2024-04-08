import { rest } from "msw";

function isNumber(x) {
  return typeof x === "number" && !isNaN(x);
}

function artistFilter(artist) {
  return function (item) {
    return item.artist.toLowerCase().startsWith(artist.toLowerCase());
  };
}

function genreFilter(genres) {
  return function (item) {
    return genres.includes(item.genre);
  };
}

function yearFilter(yearFrom, yearTo) {
  return function (item) {
    return (
      (!yearFrom || item.year >= yearFrom) && (!yearTo || item.year <= yearTo)
    );
  };
}

function countryFilter(country) {
  return function (item) {
    return item.country === country;
  };
}

export const handlers = [
  rest.get("/api/countries", async (req, res, ctx) => {
    try {
      const { default: countries } = await import("./api/countries.json");

      return res(
        ctx.delay(2000),
        ctx.status(200),
        ctx.json({
          countries,
        })
      );
    } catch (error) {
      console.error("Error on API call");
      console.error(error);
      return res(ctx.status(404));
    }
  }),

  rest.get("/api/genres", async (req, res, ctx) => {
    try {
      const { default: genres } = await import("./api/genres.json");

      return res(
        ctx.delay(2000),
        ctx.status(200),
        ctx.json({
          genres,
        })
      );
    } catch (error) {
      console.error("Error on API call ⬇️");
      console.error(error);
      return res(ctx.status(404), ctx.json({ error: "Not found" }));
    }
  }),

  rest.get("/api/artists/autocomplete", async (req, res, ctx) => {
    try {
      const { default: artists } = await import("./api/artists.json");

      const query = req.url.searchParams.get("query");
      const limit = Math.min(req.url.searchParams.get("limit") ?? 10, 20);

      if (!query) {
        return res(
          ctx.delay(2000),
          ctx.status(400),
          ctx.json({
            error: "Missing query parameter",
          })
        );
      }

      return res(
        ctx.delay(2000),
        ctx.status(200),
        ctx.json({
          artists: artists
            .filter((item) =>
              item.toLowerCase().startsWith(query.toLowerCase())
            )
            .sort()
            .slice(0, limit),
        })
      );
    } catch (error) {
      console.error("Error on API call ⬇️");
      console.error(error);
      return res(ctx.status(404), ctx.json({ error: "Not found" }));
    }
  }),

  rest.get("/api/search", async (req, res, ctx) => {
    try {
      const { default: searchList } = await import("./api/search.json");

      const offset = req.url.searchParams.has("offset")
        ? parseInt(req.url.searchParams.get("offset"), 10)
        : 0;

      if (!isNumber(offset) || offset < 0) {
        return res(
          ctx.delay(2000),
          ctx.status(400),
          ctx.json({
            error: "Incorrect offset parameter",
          })
        );
      }

      const limit = req.url.searchParams.has("limit")
        ? Math.min(24, parseInt(req.url.searchParams.get("limit"), 10))
        : 12;

      if (!isNumber(limit) || limit <= 0) {
        return res(
          ctx.delay(2000),
          ctx.status(400),
          ctx.json({
            error: "Incorrect limit parameter",
          })
        );
      }

      const filters = [];

      const artist = req.url.searchParams.get("artist");
      const genres = req.url.searchParams
        .getAll("genre")
        .map((genre) => parseInt(genre, 10));
      const yearFrom = req.url.searchParams.has("year_from")
        ? parseInt(req.url.searchParams.get("year_from"), 10)
        : null;
      const yearTo = req.url.searchParams.has("year_to")
        ? parseInt(req.url.searchParams.get("year_to"), 10)
        : null;
      const country = req.url.searchParams.get("country");

      if (!genres.every((genre) => isNumber(genre))) {
        return res(
          ctx.delay(2000),
          ctx.status(400),
          ctx.json({
            error: "Incorrect genre parameter",
          })
        );
      }

      if (yearFrom && !isNumber(yearFrom)) {
        return res(
          ctx.delay(2000),
          ctx.status(400),
          ctx.json({
            error: "Incorrect year_from parameter",
          })
        );
      }

      if (yearTo && !isNumber(yearTo)) {
        return res(
          ctx.delay(2000),
          ctx.status(400),
          ctx.json({
            error: "Incorrect year_to parameter",
          })
        );
      }

      if (artist) {
        filters.push(artistFilter(artist));
      }

      if (genres.length > 0) {
        filters.push(genreFilter(genres));
      }

      if (yearFrom || yearTo) {
        filters.push(yearFilter(yearFrom, yearTo));
      }

      if (country) {
        filters.push(countryFilter(country));
      }

      const filteredList = searchList.filter((item) =>
        filters.every((filter) => filter(item))
      );

      return res(
        ctx.delay(2000),
        ctx.status(200),
        ctx.json({
          results: filteredList.slice(offset, offset + limit),
          total: filteredList.length,
        })
      );
    } catch (error) {
      console.error("Error on API call ⬇️");
      console.error(error);
      return res(ctx.status(404), ctx.json({ error: "Not found" }));
    }
  }),

  rest.get("/api/releases/:id", async (req, res, ctx) => {
    try {
      const id = req.params.id;
      const { default: release } = await import(`./api/releases/${id}.json`);

      return res(
        ctx.delay(2000),
        ctx.status(200),
        ctx.json({
          release,
        })
      );
    } catch (error) {
      console.error("Error on API call ⬇️");
      console.error(error);
      return res(ctx.status(404), ctx.json({ error: "Not found" }));
    }
  }),
];
