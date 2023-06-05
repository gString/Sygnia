export interface Task {
    id: string;
    priority: 1 | 2 | 3;
    created_at: number;
    title: string;
    status: "incomplete" | "complete";
}

export interface Priorities {
    low: number;
    medium: number;
    high: number;
}