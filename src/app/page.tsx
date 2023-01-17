"use client";
import { InfiniteGrid } from "@/components/infinite-grid";
import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";

const IMAGE = "lizzy.gif";

export default function Home() {
  return (
    <ChakraProvider>
      <InfiniteGrid>
        <Grid
          templateAreas={`
          "a a a b b b c c"
          "d d e f f f f f"
          "g g g h h i i i"
          "g g g h h i i i"
        `}
          gridTemplateColumns={"repeat(8, 1fr)"}
          gridTemplateRows={"repeat(4, 1fr)"}
          w={{ base: "150vw", md: "100vw" }}
          h={{ base: "100vh", md: "125vh" }}
          gap={8}
          p={4}
        >
          <GridItem area="a" bgImage={IMAGE} bgSize="cover" rounded="3xl" />
          <GridItem area="b" bgImage={IMAGE} bgSize="cover" rounded="3xl" />
          <GridItem area="c" bgImage={IMAGE} bgSize="cover" rounded="3xl" />
          <GridItem area="d" bgImage={IMAGE} bgSize="cover" rounded="3xl" />
          <GridItem area="e" bgImage={IMAGE} bgSize="cover" rounded="3xl" />
          <GridItem area="f" bgImage={IMAGE} bgSize="cover" rounded="3xl" />
          <GridItem area="g" bgImage={IMAGE} bgSize="cover" rounded="3xl" />
          <GridItem area="h" bgImage={IMAGE} bgSize="cover" rounded="3xl" />
          <GridItem area="i" bgImage={IMAGE} bgSize="cover" rounded="3xl" />
        </Grid>
      </InfiniteGrid>
    </ChakraProvider>
  );
}
