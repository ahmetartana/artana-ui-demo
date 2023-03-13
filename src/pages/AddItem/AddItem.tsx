import { yupResolver } from "@hookform/resolvers/yup";
import Grid from "@mui/material/Grid";
import { useForm } from "react-hook-form";
import { MButton, MFormCheckbox } from "../../packages/component";
import { MBox } from "../../packages/component/MBox";
import { MCard } from "../../packages/component/MCard";
import { MFormInput } from "../../packages/component/MInput";
import { useItemState, useSuspense } from "../../packages/context";
import { IItem } from "../../packages/types/pages";
import { FORM_VALIDATION } from "./validations";

export const AddItem = () => {
  const { showMessage } = useSuspense();
  const { add } = useItemState();
  const { control, handleSubmit, reset } = useForm<IItem>({
    defaultValues: {},
    resolver: yupResolver(FORM_VALIDATION),
  });

  const onSubmit = (values: IItem) => {
    add(values);
    showMessage("success", "Added item successfully");
    reset();
  };

  return (
    <MBox
      component="form"
      id={"table-definition"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <MCard title="Add Item">
        <Grid container>
          <Grid container item xs={12} md={6}>
            <Grid item xs={12}>
              <MFormInput
                label="Title"
                id={"title"}
                name="title"
                control={control}
              />
            </Grid>
            <Grid item xs={12}>
              <MFormInput
                label="Description"
                id={"description"}
                name="description"
                rows={3}
                maxRows={4}
                multiline
                control={control}
              />
            </Grid>
            <Grid item xs={12}>
              <MFormInput
                label="Price"
                name="price"
                type={"number"}
                control={control}
              />
            </Grid>
            <Grid item xs={12}>
              <MFormInput
                label="Count"
                name="count"
                type={"number"}
                control={control}
              />
            </Grid>
            <Grid item xs={12}>
              <MFormCheckbox label="State" name="state" control={control} />
            </Grid>
            <Grid item xs={6}>
              <MButton
                type="button"
                onClick={() => {
                  reset();
                }}
                color="error"
              >
                Clear
              </MButton>
            </Grid>
            <Grid item xs={6}>
              <MButton onClick={handleSubmit(onSubmit)}>Save</MButton>
            </Grid>
          </Grid>
        </Grid>
      </MCard>
    </MBox>
  );
};
