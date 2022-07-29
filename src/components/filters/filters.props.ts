export interface FiltersProps {
    query: string;
    showOnlyDone: boolean;
    onQueryChange: (value: string) => void;
    onShowOnlyDoneChange: (value: boolean) => void;
}