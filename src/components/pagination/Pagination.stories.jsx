import Pagination from "./Pagination.jsx";

export default {
  title: "Pagination",
  component: Pagination,
  argTypes: {
    totalPages: {
      control: "number",
    },
  },
};

export const Default = () => <Pagination totalPages={5} currentPage={2} />;

export const Default2 = (args) => <Pagination {...args} />;
Default2.args = {
  totalPages: 5,
  currentPage: 4,
};
