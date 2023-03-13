import { faker } from "@faker-js/faker";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import { MBox } from "../../packages/component/MBox";
import { MCard } from "../../packages/component/MCard";
import { useItemState, useSuspense } from "../../packages/context";
import { IItem } from "../../packages/types";
import Item from "./Item";

export const Home = () => {
  const { showMessage } = useSuspense();
  const { get, add, addBasket } = useItemState();
  const itemList = get();

  useEffect(() => {
    if (itemList.length === 0) {
      Array.from(Array(2)).forEach((_m) => {
        add({
          title: faker.commerce.product(),
          description: faker.commerce.productDescription(),
          count: Math.floor(Math.random() * 100),
          price: faker.commerce.price(),
          status: faker.datatype.boolean(),
        });
      });
      showMessage("success", "Faker data added successfully");
    }
  }, []);

  const handleAddToCart = (clickedItem: IItem) => {
    if (clickedItem.id) {
      addBasket(clickedItem.id);
      showMessage("info", "Added item successfully");
    }
  };

  return (
    <MBox>
      <MCard cardHeaderProps={{ title: "Home" }}>
        <Grid container spacing={5}>
          {itemList?.map((item) => (
            <Grid item key={item.id} xs={12} sm={3}>
              <Item item={item} handleAddToCart={handleAddToCart} />
            </Grid>
          ))}
        </Grid>
      </MCard>
    </MBox>
  );
};
