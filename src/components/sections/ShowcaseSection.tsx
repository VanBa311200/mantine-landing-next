"use client";

import Image from "next/image";
import { Box, Card, Container, Group, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { workflow } from "@/data/landing";
import { SectionTitle } from "./SectionTitle";
import { SectionReveal } from "./SectionReveal";

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=80",
    alt: "Team reviewing landing analytics dashboard",
  },
  {
    src: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    alt: "Creative team designing product landing page",
  },
  {
    src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80",
    alt: "Workspace with laptop showing modern web interface",
  },
];

export function ShowcaseSection() {
  return (
    <section id="showcase" className="section-shell">
      <Container size="lg">
        <SectionReveal>
          <SectionTitle
            eyebrow="Showcase"
            title="Một quy trình tinh gọn để đi từ ý tưởng đến launch"
            description="Thay vì over-engineering, chúng tôi tập trung vào nhịp đọc, bằng chứng và CTA để tạo landing page có lực bán hàng thực sự."
          />
        </SectionReveal>

        <SectionReveal delay={0.08}>
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg" mb="xl">
            {gallery.map((item) => (
              <Card key={item.src} className="soft-card media-card" p={0} radius="lg">
                <Box className="media-shell">
                  <Image src={item.src} alt={item.alt} fill sizes="(max-width: 48em) 100vw, 33vw" className="media-image" />
                </Box>
              </Card>
            ))}
          </SimpleGrid>
        </SectionReveal>

        <SectionReveal delay={0.12}>
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
            {workflow.map((item) => (
              <Card key={item.step} className="soft-card" h="100%">
                <Stack gap="md">
                  <Group>
                    <Text fw={700} fz={28} c="indigo.3">
                      {item.step}
                    </Text>
                  </Group>
                  <Title order={3} fz={24} c="gray.0">
                    {item.title}
                  </Title>
                  <Text c="gray.4">{item.description}</Text>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
        </SectionReveal>

        <SectionReveal delay={0.18}>
          <Box mt={28}>
            <Text c="gray.5" size="sm">
              Từ nghiên cứu thông điệp đến tối ưu sau launch, mọi section được xây để tăng clarity và giảm friction trong hành trình quyết định.
            </Text>
          </Box>
        </SectionReveal>
      </Container>
    </section>
  );
}
