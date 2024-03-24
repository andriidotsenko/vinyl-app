import * as Yup from "yup";
import PropTypes from "prop-types";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCountriesList } from "../../hooks/useCountriesList.js";
import { useDecadeList } from "../../hooks/useDecadeList.js";
import { useGenreList } from "../../hooks/useGenreList.js";
import { emptyFilters } from "../../utils/filters.js";
import { Button } from "../Button/Button";
import MultiSelect from "../FormComponents/MultiSelect";
import SingleSelect from "../FormComponents/SingleSelect.jsx";
import CustomInputField from "../FormComponents/CustomInputField";
import styles from "./SearchForm.module.css";
import clsx from "clsx";
import { useVinylCardList } from "../../hooks/useVinylCardList.js";

const formSchema = Yup.object({
  artist: Yup.string().optional().min(2).max(15),
  country: Yup.string().min(1),
  genres: Yup.array().min(3),
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
              <CustomInputField
                {...field}
                options={vinyls}
                placeholder={"Artist"}
                error={errors.artist?.message}
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
              <SingleSelect
                {...field}
                options={countryList}
                placeholder={"Country"}
                error={errors.country?.message}
              />
            )}
          />
        </div>
        <div className={clsx(styles.block, styles.searchButton)}>
          <Button type="submit" disabled={isFiltersEmpty}>
            Search
          </Button>
        </div>
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  defaultValues: PropTypes.object,
};
