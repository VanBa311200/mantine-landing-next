import {
  Badge,
  Box,
  Button,
  Container,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { IconCircleCheck, IconSparkles, IconTargetArrow } from "@tabler/icons-react";
import { heroStats } from "@/data/landing";
import { SectionReveal } from "./SectionReveal";

export function HeroSection() {
  return (
    <Box className="section-shell" pt={{ base: 130, md: 158 }}>
      <Container size="lg">
        <SectionReveal>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={{ base: "xl", md: 56 }}>
            <Stack gap="lg">
              <Badge variant="dot" color="violet" size="lg" w="fit-content">
                Mantine UI + Next.js App Router
              </Badge>

              <Title className="hero-title" c="gray.0">
                Landing page tạo <span className="hero-gradient">ấn tượng ngay lần chạm đầu</span>
              </Title>

              <Text c="gray.3" fz={{ base: "md", md: "lg" }} maw={640}>
                Chúng tôi biến thông điệp sản phẩm thành trải nghiệm thị giác rõ ràng, giúp đội của bạn
                tăng chuyển đổi mà vẫn giữ bản sắc thương hiệu.
              </Text>

              <Group gap="md">
                <Button component="a" href="#cta" size="md" rightSection={<IconTargetArrow size={16} />}>
                  Đặt lịch strategy call
                </Button>
                <Button component="a" href="#showcase" size="md" variant="default">
                  Xem quy trình triển khai
                </Button>
              </Group>

              <Group gap="xl" pt="md">
                {heroStats.map((item) => (
                  <Stack key={item.label} gap={2}>
                    <Text fw={700} fz={30} c="gray.0">
                      {item.value}
                    </Text>
                    <Text size="sm" c="gray.4">
                      {item.label}
                    </Text>
                  </Stack>
                ))}
              </Group>
            </Stack>

            <Paper className="soft-card" radius="xl" p="xl">
              <Stack gap="lg">
                <Group justify="space-between">
                  <Group gap="xs">
                    <ThemeIcon color="violet" variant="light" radius="xl">
                      <IconSparkles size={16} />
                    </ThemeIcon>
                    <Text fw={600}>Conversion Canvas</Text>
                  </Group>
                  <Badge color="teal" variant="light">
                    Live
                  </Badge>
                </Group>

                <Stack gap="sm">
                  <Text size="sm" c="gray.4">
                    Trọng tâm tối ưu
                  </Text>
                  <Text fz={26} fw={700} c="gray.0">
                    +61% demo booking
                  </Text>
                </Stack>

                <Stack gap="sm">
                  <Group gap="xs">
                    <ThemeIcon variant="transparent" color="teal" size={20}>
                      <IconCircleCheck size={16} />
                    </ThemeIcon>
                    <Text size="sm" c="gray.2">
                      Message hierarchy rõ ràng
                    </Text>
                  </Group>
                  <Group gap="xs">
                    <ThemeIcon variant="transparent" color="teal" size={20}>
                      <IconCircleCheck size={16} />
                    </ThemeIcon>
                    <Text size="sm" c="gray.2">
                      CTA flow nhất quán desktop/mobile
                    </Text>
                  </Group>
                  <Group gap="xs">
                    <ThemeIcon variant="transparent" color="teal" size={20}>
                      <IconCircleCheck size={16} />
                    </ThemeIcon>
                    <Text size="sm" c="gray.2">
                      Dễ mở rộng cho A/B testing
                    </Text>
                  </Group>
                </Stack>
              </Stack>
            </Paper>
          </SimpleGrid>
        </SectionReveal>
      </Container>
    </Box>
  );
}
