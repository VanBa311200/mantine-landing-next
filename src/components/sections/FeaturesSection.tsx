import { Card, Container, Group, SimpleGrid, Text, ThemeIcon, Title } from "@mantine/core";
import { IconBolt, IconFlask, IconPalette, IconSparkles } from "@tabler/icons-react";
import { features } from "@/data/landing";
import { SectionTitle } from "./SectionTitle";
import { SectionReveal } from "./SectionReveal";

const iconMap = {
  spark: IconSparkles,
  bolt: IconBolt,
  flask: IconFlask,
  palette: IconPalette,
};

export function FeaturesSection() {
  return (
    <section id="features" className="section-shell">
      <Container size="lg">
        <SectionReveal>
          <SectionTitle
          eyebrow="Features"
          title="Mỗi block đều phục vụ một mục tiêu chuyển đổi"
          description="Thiết kế landing page không chỉ đẹp mắt mà còn có cấu trúc thông điệp chặt chẽ, giúp người dùng ra quyết định nhanh hơn."
        />

        </SectionReveal>

        <SectionReveal delay={0.08}>
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];

            return (
              <Card key={feature.title} className="soft-card feature-card" h="100%">
                <Group mb="md">
                  <ThemeIcon variant="light" color="indigo" size={42} radius="xl">
                    <Icon size={20} />
                  </ThemeIcon>
                </Group>
                <Title order={3} fz={22} c="gray.0" mb="sm">
                  {feature.title}
                </Title>
                <Text c="gray.4" size="sm">
                  {feature.description}
                </Text>
              </Card>
            );
          })}
          </SimpleGrid>
        </SectionReveal>
      </Container>
    </section>
  );
}
