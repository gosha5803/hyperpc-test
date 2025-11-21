export type PageableReq = {
    _page: number;
    _per_page: number;
};

export type PageableRes<T> = {
    first: number;
    prev: number;
    next: number | null;
    last: number;
    pages: number;
    items: number;
    data: T[];
};
