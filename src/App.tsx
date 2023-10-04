import * as React from "react";
import { ChakraProvider, Box, Text, Link, VStack, Code, Grid, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Data } from "./components/Data";

import "./util/design/design-prime";

export const App = () => (
    <ChakraProvider theme={theme}>
        <Data />
    </ChakraProvider>
);
