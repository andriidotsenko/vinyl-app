import * as Yup from "yup";
import PropTypes from "prop-types";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDecadeList } from "../../hooks/useDecadeList.js";
import { useCountryListAsync } from "../../hooks/useCountryListAsync.js";
import { emptyFilters } from "../../utils/filters.js";
import { Button } from "../Button/Button";
import MultiSelect from "../Form/MultiSelect.jsx";
import Select from "../Form/Select.jsx";
import AutosuggestInput from "../Form/AutosuggestInput.jsx";
import styles from "./SearchForm.module.css";
import clsx from "clsx";
import { useGenreListAsync } from "../../hooks/useGenreListAsync.js";
import { useArtistsAsync } from "../../hooks/useArtistsAsync.js";

const formSchema = Yup.object({
  artist: Yup.string().min(1),
  country: Yup.string().min(1),
  genres: Yup.array().min(1),
  decade: Yup.string().min(1),
});

export const SearchForm = ({ onSubmit, defaultValues = emptyFilters }) => {
  const decadeList = useDecadeList();

  const genreListQuery = useGenreListAsync();
  const coutryListQuery = useCountryListAsync();

  const {
    handleSubmit,
    control,
    reset,
    getValues,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(formSchema),
  });

  watch();
  const artistsQuery = useArtistsAsync(getValues().artist || "");
  const isFiltersEmpty = Object.values(getValues()).every((value) =>
    Array.isArray(value) ? !value?.length : !value
  );

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <div className={styles.filter}>
      <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
        <div className={clsx(styles.block, styles.artist)}>
          <Controller
            control={control}
            name="artist"
            render={({ field }) => (
              <AutosuggestInput
                {...field}
                placeholder={"Artist"}
                error={errors.artist?.message}
                options={artistsQuery.data}
              />
            )}
          />
        </div>
        <div className={clsx(styles.block, styles.genres)}>
          <Controller
            control={control}
            name="genres"
            render={({ field }) => (
              <MultiSelect
                {...field}
                options={genreListQuery.data}
                placeholder={"Genre"}
                error={errors.genres?.message}
              />
            )}
          />
        </div>
        <div className={clsx(styles.block, styles.decades)}>
          <Controller
            control={control}
            name="decade"
            render={({ field }) => (
              <Select
                {...field}
                options={decadeList.map((decade) => ({
                  value: decade.from,
                  label: decade.title,
                }))}
                ref={null}
                error={errors.decade?.message}
                placeholder="Decade"
              />
            )}
          />
        </div>
        <div className={clsx(styles.block, styles.country)}>
          <Controller
            control={control}
            name="country"
            render={({ field }) => (
              <Select
                {...field}
                options={coutryListQuery.data.map((country) => ({
                  value: country.id,
                  label: country.title,
                }))}
                ref={null}
                error={errors.country?.message}
                placeholder="Country"
              />
            )}
          />
        </div>
        <div className={styles.searchButton}>
          <div className={styles.block}>
            <Button type="submit" disabled={isFiltersEmpty}>
              Search
            </Button>
          </div>
          <div className={styles.block}>
            <Button
              type="button"
              disabled={isFiltersEmpty}
              onClick={() => reset({})}
            >
              Reset filters
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  defaultValues: PropTypes.object,
};
