"use client";
import { DashboardShell } from "../../components/Dashboard/dashboardShell";
import { DashboardHeader } from "../../components/Dashboard/dashboardHeader";
import { ListingsTable } from "../../components/Dashboard/listingsTable";
import { Button } from "../../components/ui/button";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import {
  addNewPackage,
  fetchAllPackages,
  editPackage,
  deletePackage,
} from "../../store/admin/tourPackage-slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function DashboardPage() {
  const { packageList } = useSelector((state) => state.adminTourPackages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPackages());
  }, [dispatch]);

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Listings"
        text="Manage your travel listings and packages."
      >
        <Button asChild>
          <Link href="/Dashboard/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Listing
          </Link>
        </Button>
      </DashboardHeader>
      <div className="grid gap-4">
        {packageList.length > 0 && (
          <ListingsTable initialListings={packageList} />
        )}
      </div>
    </DashboardShell>
  );
}
