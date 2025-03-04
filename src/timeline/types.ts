export interface TimelineStatusProps {
    type: "dark" | "light";
    label: string;
}

export interface TimelineItemProps {
    title: string | JSX.Element;
    content: string | JSX.Element;
    statuses?: TimelineStatusProps[] | undefined;
}

export interface TimelineProps {
    items: TimelineItemProps[];
    title?: string | undefined;
    className?: string | undefined;
    startCol?: number | undefined;
    colSpan?: number | undefined;
    "data-testid"?: string | undefined;
    "data-base-indicator-testid"?: string | undefined;
}
