import { Card, Container, Stack, Text, Title } from "@mantine/core";
import { faqs } from "@/data/landing";
import { SectionTitle } from "./SectionTitle";
import { SectionReveal } from "./SectionReveal";

export function FaqSection() {
  return (
    <section id="faq" className="section-shell">
      <Container size="md">
        <SectionReveal>
          <SectionTitle
            eyebrow="FAQ"
            title="Câu hỏi thường gặp trước khi bắt đầu"
            description="Nếu bạn cần lộ trình rõ ràng và có thể triển khai ngay, các câu trả lời dưới đây sẽ giúp bạn hình dung toàn bộ flow làm việc."
          />
        </SectionReveal>

        <SectionReveal delay={0.08}>
          <Stack gap="md">
            {faqs.map((faq) => (
              <Card key={faq.question} className="soft-card" radius="lg">
                <Stack gap="xs">
                  <Title order={4} fz={20} c="gray.0">
                    {faq.question}
                  </Title>
                  <Text c="gray.4">{faq.answer}</Text>
                </Stack>
              </Card>
            ))}
          </Stack>
        </SectionReveal>
      </Container>
    </section>
  );
}
