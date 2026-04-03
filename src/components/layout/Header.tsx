"use client";

import { Anchor, Burger, Button, Container, Drawer, Group, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconArrowUpRight } from "@tabler/icons-react";
import { navLinks } from "@/data/landing";

export function Header() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <header className="site-header">
      <Container size="lg" className="header-inner" py={10}>
        <Group visibleFrom="md" className="header-desktop" wrap="nowrap">
          <Text fw={700} className="brand-mark" c="gray.0" component="a" href="#" onClick={close}>
            Aster Studio
          </Text>

          <Group gap="xl" wrap="nowrap" className="header-nav">
            {navLinks.map((link) => (
              <Anchor key={link.href} href={link.href} c="gray.3" size="sm" className="header-link" onClick={close}>
                {link.label}
              </Anchor>
            ))}
          </Group>

          <Group gap="sm" wrap="nowrap" className="header-actions">
            <Button variant="default" radius="xl" component="a" href="#pricing" className="btn-muted" onClick={close}>
              Xem báo giá
            </Button>
            <Button rightSection={<IconArrowUpRight size={16} />} component="a" href="#cta" className="btn-primary" onClick={close}>
              Book demo
            </Button>
          </Group>
        </Group>

        <Group hiddenFrom="md" className="header-mobile" justify="space-between" wrap="nowrap">
          <Text fw={700} className="brand-mark" c="gray.0" component="a" href="#" onClick={close}>
            Aster Studio
          </Text>
          <Burger opened={opened} onClick={open} aria-label="Open navigation" color="white" />
        </Group>
      </Container>

      <Drawer
        opened={opened}
        onClose={close}
        title="Menu"
        position="right"
        overlayProps={{ opacity: 0.45, blur: 3 }}
      >
        <Stack gap="lg">
          {navLinks.map((link) => (
            <Anchor key={link.href} href={link.href} onClick={close} c="gray.1" size="md">
              {link.label}
            </Anchor>
          ))}
          <Button variant="default" component="a" href="#pricing" onClick={close}>
            Xem báo giá
          </Button>
          <Button component="a" href="#cta" onClick={close}>
            Book demo
          </Button>
        </Stack>
      </Drawer>
    </header>
  );
}
