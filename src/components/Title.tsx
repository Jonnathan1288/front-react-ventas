import { Container, Heading } from "@chakra-ui/react";

interface TitleProps {
    title: string;
}

export const Title = ({ title }: TitleProps) => {
    return (
        <>
            <Container style={{ textAlign: "center" }} p={2}>
                <Heading as="h2" size="xl">
                    {title}
                </Heading>
            </Container>
        </>
    );
};
