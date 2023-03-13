import { Button } from "@mui/material";
import { IItem } from "../../packages/types";
import { Wrapper } from "./Home.styles";

const Item = ({
  item,
  handleAddToCart,
}: {
  item: IItem;
  handleAddToCart: (item: IItem) => void;
}) => {
  return (
    <Wrapper>
      <img src={"./noimage.jpg"} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p>{item.count}</p>
        <h3>${item.price}</h3>
      </div>
      <Button disabled={item.count <= 0} onClick={() => handleAddToCart(item)}>
        Add to basket
      </Button>
    </Wrapper>
  );
};

export default Item;
