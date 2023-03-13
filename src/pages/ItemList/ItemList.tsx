import RemoveCircleOutlineTwoToneIcon from "@mui/icons-material/RemoveCircleOutlineTwoTone";
import IconButton from "@mui/material/IconButton";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useState } from "react";
import { MBox } from "../../packages/component/MBox";
import { MCard } from "../../packages/component/MCard";
import { useItemState, useSuspense } from "../../packages/context";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "title", headerName: "Title", flex: 1 },
  { field: "description", headerName: "Description", flex: 2 },
  {
    field: "price",
    headerName: "Price",
    flex: 1,
  },
  {
    field: "count",
    headerName: "Count",
    type: "number",
    flex: 1,
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.status ? "Active" : "Passive"}`,
  },
];

export const ItemList = () => {
  const { showMessage } = useSuspense();
  const { get, remove } = useItemState();
  const itemList = get();
  const [idList, setIdList] = useState<number[]>([]);

  return (
    <MBox>
      <MCard
        cardHeaderProps={{
          title: "Item List",
          action: (
            <IconButton
              disabled={idList.length <= 0}
              color="error"
              onClick={() => {
                remove(idList);
                showMessage("error", "Deleted item successfully");
                setIdList([]);
              }}
            >
              <RemoveCircleOutlineTwoToneIcon />
            </IconButton>
          ),
        }}
      >
        <DataGrid
          autoHeight
          columns={columns}
          rows={itemList}
          onRowSelectionModelChange={(selected) => {
            const selectedIdList: number[] = selected.map((m) => Number(m));
            setIdList(selectedIdList);
          }}
          checkboxSelection
        />
      </MCard>
    </MBox>
  );
};
