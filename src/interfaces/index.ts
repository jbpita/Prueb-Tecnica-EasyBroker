export interface Pagination {
    limit: number;
    page: number;
    total: number;
    next_page: string;
}

export interface Commission {
    type: string;
}

export interface Operation {
    type: string;
    amount: number;
    currency: string;
    formatted_amount: string;
    commission: Commission;
    unit: string;
}

export interface Content {
    public_id: string;
    title: string;
    title_image_full: string;
    title_image_thumb: string;
    location: string;
    operations: Operation[];
    bedrooms?: any;
    bathrooms?: any;
    parking_spaces?: number;
    property_type: string;
    lot_size: number;
    construction_size: number;
    updated_at: Date;
    agent: string;
    show_prices: boolean;
    share_commission: boolean;
}

export interface ApiBrokerEasyInterfaces {
    pagination: Pagination;
    content: Content[];
}

export interface ResponseGetApi {
    total: number;
    titles: string[];
}