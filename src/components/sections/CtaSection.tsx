import { Button, Container, Group, Paper, Stack, Text, TextInput, Title } from "@mantine/core";
import { IconArrowUpRight } from "@tabler/icons-react";
import { SectionReveal } from "./SectionReveal";

export function CtaSection() {
  return (
    <section id="cta" className="section-shell" style={{ paddingTop: 64, paddingBottom: 120 }}>
      <Container size="lg">
        <SectionReveal>
          <Paper className="cta-panel" radius="xl" p={{ base: "xl", md: "3rem" }}>
          <Stack gap="xl">
            <Stack gap="sm">
              <Title order={2} fz={{ base: 32, md: 52 }} c="gray.0">
                Sẵn sàng biến landing page thành cỗ máy tạo lead?
              </Title>
              <Text c="gray.4" maw={700}>
                Để lại email công việc, chúng tôi sẽ gửi proposal với bố cục section, định hướng thông điệp và lộ trình triển khai phù hợp với mục tiêu tăng trưởng của bạn.
              </Text>
            </Stack>

            <Group align="end" gap="md" wrap="wrap">
              <TextInput
                placeholder="you@company.com"
                label="Work email"
                size="md"
                radius="xl"
                styles={{
                  root: { minWidth: 280, flex: "1 1 320px" },
                  input: { background: "rgba(8, 11, 21, 0.8)", borderColor: "rgba(170, 190, 255, 0.28)" },
                }}
              />
              <Button size="md" rightSection={<IconArrowUpRight size={16} />}>
                Nhận proposal
              </Button>
              <Button component="a" href="#features" size="md" variant="default">
                Xem lại features
              </Button>
            </Group>
          </Stack>
          </Paper>
        </SectionReveal>
      </Container>
    </section>
  );
}
