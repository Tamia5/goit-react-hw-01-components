import { Section, SectionTitle, StatsList, StatListItem, Label, Percentage } from './Statistics.styled';

const Statistics = ({ stats, title }) => {
    return (
        <Section>
            {title && <SectionTitle>{title}</SectionTitle>}

            <StatsList>
                {stats.map(({ id, label, percentage }) => (
                    <StatListItem key={id}>
                        <Label>{label}</Label>
                        <Percentage>{percentage}%</Percentage>
                    </StatListItem>
                ))}
            </StatsList>
        </Section>
    )
}

export default Statistics;