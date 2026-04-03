import { Badge, Stack, Text, Title } from "@mantine/core";

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <Stack gap="sm" mb="xl">
      <Badge variant="light" color="indigo" w="fit-content">
        {eyebrow}
      </Badge>
      <Title order={2} fz={{ base: 30, md: 42 }} c="gray.0">
        {title}
      </Title>
      <Text c="gray.4" maw={760}>
        {description}
      </Text>
    </Stack>
  );
}
