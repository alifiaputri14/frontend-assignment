import React from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

type DummyDataItem = {
  id: string;
  kode_saham: string;
  nama: string;
  tanggal_listing: string;
  sektor_id: {
    nama: string;
  };
};

const dummyData: DummyDataItem[] = [
  {
    id: "08f32277-71ac-47f5-b68c-b773a5b0fc77",
    kode_saham: "ASII",
    nama: "PT Astra International Tbk",
    tanggal_listing: "1990-04-04",
    sektor_id: {
      nama: "Diversifikasi",
    },
  },
  {
    id: "681a288e-f6f5-4789-bf41-e7366df88253",
    kode_saham: "BBCA",
    nama: "PT Bank Central Asia Tbk",
    tanggal_listing: "2000-05-31",
    sektor_id: {
      nama: "Keuangan",
    },
  },
  {
    id: "99fbf104-30e6-4d0f-91d4-3f5cff2e69ee",
    kode_saham: "TLKM",
    nama: "PT Telekomunikasi Indonesia Tbk",
    tanggal_listing: "1995-11-14",
    sektor_id: {
      nama: "Telekomunikasi",
    },
  },
  {
    id: "bf1298e2-bd05-49f0-9248-3f7402ed85f1",
    kode_saham: "UNVR",
    nama: "PT Unilever Indonesia Tbk",
    tanggal_listing: "1982-12-11",
    sektor_id: {
      nama: "Konsumen Barang",
    },
  },
  {
    id: "d82fae84-f607-430f-a1a7-b6da9bc3c633",
    kode_saham: "INDF",
    nama: "PT Indofood Sukses Makmur Tbk",
    tanggal_listing: "1994-07-14",
    sektor_id: {
      nama: "Makanan & Minuman",
    },
  },
];

const Home: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4">Dummy Data</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Kode Saham</TableCell>
              <TableCell>Nama</TableCell>
              <TableCell>Tanggal Listing</TableCell>
              <TableCell>Sektor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.kode_saham}</TableCell>
                <TableCell>{item.nama}</TableCell>
                <TableCell>{item.tanggal_listing}</TableCell>
                <TableCell>{item.sektor_id.nama}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Home;