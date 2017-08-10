interface Geo {
    lat: string;
    lng: string;
}

export interface UserAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}
