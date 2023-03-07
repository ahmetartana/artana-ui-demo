import { yupResolver } from "@hookform/resolvers/yup";
import { CardContent } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { useForm } from "react-hook-form";
import { MButton, MFormCheckbox } from "../../packages/component";
import { MFormInput } from "../../packages/component/MInput";
import { FORM_VALIDATION } from "./validations";

type IItem = {
  productName: string;
  productCount: number;
  productAmount: number;
  status: boolean;
};

export const AddItem = () => {
  const { control, handleSubmit, reset } = useForm<IItem>({
    defaultValues: {},
    resolver: yupResolver(FORM_VALIDATION),
  });

  const onSubmit = (values: IItem) => {};

  return (
    <Box
      component="form"
      id={"table-definition"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Card title="Ürün Ekle">
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <MFormInput
                label="Ürün Adı"
                id={"productName"}
                name="productName"
                control={control}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <MFormInput
                label="Ürün Sayısı"
                name="productCount"
                type={"number"}
                control={control}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <MFormInput
                label="Ürün Fiyatı"
                name="productAmount"
                type={"number"}
                control={control}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <MFormCheckbox label="Durum" name="state" control={control} />
            </Grid>
            <Grid item xs={12} md={6}>
              <MButton onClick={handleSubmit(onSubmit)}>Kaydet</MButton>
            </Grid>
            <Grid item xs={12} md={6}>
              <MButton
                type="button"
                onClick={() => {
                  reset();
                }}
                color="error"
              >
                Temizle
              </MButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};
