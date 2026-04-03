import { Badge, Button, Card, Container, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { plans } from "@/data/landing";
import { SectionTitle } from "./SectionTitle";
import { SectionReveal } from "./SectionReveal";

export function PricingSection() {
  return (
    <section id="pricing" className="section-shell">
      <Container size="lg">
        <SectionReveal>
          <SectionTitle
          eyebrow="Pricing"
          title="Chọn gói phù hợp với giai đoạn tăng trưởng"
          description="Mỗi gói đều tập trung vào tốc độ ra mắt và khả năng tối ưu tiếp theo, tránh lãng phí tài nguyên ngay từ đầu."
        />

        </SectionReveal>

        <SectionReveal delay={0.08}>
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
          {plans.map((plan) => (
            <Card key={plan.name} className={`soft-card ${plan.highlighted ? "pricing-highlight" : ""}`} h="100%">
              <Stack h="100%" justify="space-between" gap="xl">
                <Stack gap="sm">
                  {plan.highlighted && (
                    <Badge color="teal" variant="light" w="fit-content">
                      Most selected
                    </Badge>
                  )}
                  <Title order={3} fz={24} c="gray.0">
                    {plan.name}
                  </Title>
                  <Text c="gray.5" size="sm">
                    {plan.description}
                  </Text>
                  <Text fw={700} fz={38} c="gray.0">
                    {plan.price}
                  </Text>

                  <Stack gap="sm">
                    {plan.features.map((feature) => (
                      <Text key={feature} c="gray.2" size="sm">
                        • {feature}
                      </Text>
                    ))}
                  </Stack>
                </Stack>

                <Button component="a" href="#cta" variant={plan.highlighted ? "filled" : "default"}>
                  {plan.cta}
                </Button>
              </Stack>
            </Card>
          ))}
          </SimpleGrid>
        </SectionReveal>
      </Container>
    </section>
  );
}
