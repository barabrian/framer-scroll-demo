import { Section } from 'src/cmp/Section'
import { BasicReveal } from 'src/cmp/BasicReveal'
import { Parallax } from 'src/cmp/Parallax'
import { StaggerReveal } from 'src/cmp/StaggerReveal'
import { Title } from 'src/cmp/Title'
import { Progress } from 'src/cmp/Progress'

export default function Home() {
  return (
    <main className="px-24">
      <Progress />
      <Section>
        <Title big>Framer motion scroll animation</Title>
      </Section>
      <Section>
        <BasicReveal />
      </Section>
      <Section>
        <StaggerReveal />
      </Section>
      <Section>
        <Parallax />
      </Section>
      <Section>
        <Title>Finito</Title>
      </Section>
    </main>
  )
}
