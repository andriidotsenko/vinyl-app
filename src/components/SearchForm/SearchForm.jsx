import * as Yup from "yup";
import PropTypes from "prop-types";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCountriesList } from "../../hooks/useCountriesList.js";
import { useDecadeList } from "../../hooks/useDecadeList.js";
import { useGenreList } from "../../hooks/useGenreList.js";
import { emptyFilters } from "../../utils/filters.js";
import { Button } from "../Button/Button";
import MultiSelect from "../Form/MultiSelect.jsx";
import Select from "../Form/Select.jsx";
import AutosuggestInput from "../Form/AutosuggestInput.jsx";
import styles from "./SearchForm.module.css";
import clsx from "clsx";
import { useVinylCardList } from "../../hooks/useVinylCardList.js";
import { filterOptions } from "./utils.js";

const formSchema = Yup.object({
  artist: Yup.string().optional().min(2).max(8),
  country: Yup.string().min(1),
  genres: Yup.array().min(2),
  decades: Yup.array().of(Yup.number()).min(1),
});

export const SearchForm = ({ onSubmit, defaultValues = emptyFilters }) => {
  const genreList = useGenreList();
  const decadeList = useDecadeList();
  const countryList = useCountriesList();
  const vinyls = useVinylCardList();

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
                options={vinyls}
                placeholder={"Artist"}
                error={errors.artist?.message}
                filterFunction={(options, searchText) =>
                  filterOptions(options, searchText)
                }
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
                options={genreList}
                placeholder={"Genre"}
                error={errors.genres?.message}
              />
            )}
          />
        </div>
        <div className={clsx(styles.block, styles.decades)}>
          <Controller
            control={control}
            name="decades"
            render={({ field }) => (
              <MultiSelect
                {...field}
                options={decadeList}
                placeholder={"Decades"}
                error={errors.decades?.message}
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
                options={countryList}
                placeholder={"Country"}
                error={errors.country?.message}
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
