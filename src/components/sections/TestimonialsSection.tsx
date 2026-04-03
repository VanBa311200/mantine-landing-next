import { Card, Container, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { testimonials } from "@/data/landing";
import { SectionTitle } from "./SectionTitle";
import { SectionReveal } from "./SectionReveal";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-shell">
      <Container size="lg">
        <SectionReveal>
          <SectionTitle
          eyebrow="Testimonials"
          title="Kết quả từ các team đã triển khai"
          description="Mục tiêu cuối cùng của landing page là tạo ra tăng trưởng đo được, không chỉ là một giao diện đẹp."
        />

        </SectionReveal>

        <SectionReveal delay={0.08}>
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
          {testimonials.map((item) => (
            <Card key={item.name} className="soft-card" h="100%">
              <Stack gap="lg" justify="space-between" h="100%">
                <Text c="gray.1" fz="lg" lh={1.7}>
                  “{item.quote}”
                </Text>
                <Stack gap={0}>
                  <Title order={4} fz={18} c="gray.0">
                    {item.name}
                  </Title>
                  <Text c="gray.5" size="sm">
                    {item.role}
                  </Text>
                </Stack>
              </Stack>
            </Card>
          ))}
          </SimpleGrid>
        </SectionReveal>
      </Container>
    </section>
  );
}
