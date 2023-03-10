import {
  Card,
  CardActions,
  CardContent,
  CardContentProps,
  CardHeader,
} from "@mui/material";
import { IMCard } from "../../types";

export const MCard = (props: IMCard): JSX.Element => {
  const {
    children,
    title,
    cardHeaderProps,
    cardContentProps,
    cardActionsProps,
    ...otherProps
  } = props;

  const cardContentPropsConfig: CardContentProps = {
    sx: cardContentProps?.sx
      ? {
          p: 2,
          ...cardContentProps.sx,
        }
      : { p: 2 },
    ...cardContentProps,
  };

  return (
    <Card {...otherProps}>
      {cardHeaderProps && <CardHeader {...cardHeaderProps} />}
      <CardContent {...cardContentPropsConfig}>{children}</CardContent>
      {cardActionsProps && <CardActions {...cardActionsProps} />}
    </Card>
  );
};
