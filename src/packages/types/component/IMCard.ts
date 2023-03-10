import { CardProps, CardHeaderProps, CardContentProps, CardActionsProps } from '@mui/material';

export type IMCard = CardProps & {
  cardHeaderProps?: CardHeaderProps;
  cardActionsProps?: CardActionsProps;
  cardContentProps?: CardContentProps;
};
