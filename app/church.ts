// Confirmed by the church owner. Keep visitor information consistent across the site.
export const church = {
  name: "GSJA CiTi",
  address: "Jl. Ir. H. Juanda No. 5, Cempata Putih, Kec. Ciputat Tim., Kota Tangerang Selatan, Banten 15412",
  pastor: "Parsaoran Pasaribu, S.Th., M.PdK",
  services: [
    ["Ibadah Umum", "Minggu · 10.00 WIB"],
    ["Youth", "Minggu · 19.00 WIB"],
  ],
};

export const churchMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(church.address)}`;
