import { Button } from "@mui/material";
import { Wrapper } from "./Home.styles";

const Item = ({ item, handleAddToCart }: any) => {
  return (
    <Wrapper>
      <img src={"./noimage.jpg"} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.amount}</h3>
      </div>
      <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
    </Wrapper>
  );
};

export default Item;
