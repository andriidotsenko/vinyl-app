import Pagination from "./Pagination";

export default {
  title: "Pagination",
  component: Pagination,
  argTypes: {
    totalPages: {
      control: { type: "range", min: 1, max: 10, step: 1 },
    },
    currentPage: {
      control: { type: "range", min: 1, max: 10, step: 1 },
    },
    onPageChange: { action: "Page changed" },
  },
};

const Template = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentPage: 4,
  totalPages: 5,
};
