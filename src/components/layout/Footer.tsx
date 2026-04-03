import { Anchor, Container, Group, Text } from "@mantine/core";

export function Footer() {
  return (
    <footer className="footer-shell">
      <Container size="lg" py="xl">
        <Group justify="space-between" gap="md">
          <Text c="dimmed" size="sm">
            © {new Date().getFullYear()} Aster Studio. Crafted with Mantine + Next.js.
          </Text>
          <Group gap="lg">
            <Anchor href="#" c="gray.3" size="sm">
              Privacy
            </Anchor>
            <Anchor href="#" c="gray.3" size="sm">
              Terms
            </Anchor>
            <Anchor href="#" c="gray.3" size="sm">
              Contact
            </Anchor>
          </Group>
        </Group>
      </Container>
    </footer>
  );
}
