import { Grid, GridItem } from '@chakra-ui/react';

export const MainContainer = ({ children, customGrid = '' }: any) => {
  return (
    <Grid templateColumns={`${customGrid ? customGrid : '2fr 42fr 2fr'}`}>
      <GridItem colStart={2}>{children}</GridItem>
    </Grid>
  );
};
