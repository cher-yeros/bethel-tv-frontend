export const dataGridLocaleAm = {
  filterOperatorContains: "የያዘ",
  filterOperatorEquals: "እኩል",
  filterOperatorStartsWith: "ሚጀምር",
  filterOperatorEndsWith: "በ ሚያልቅ",
  filterOperatorIs: "የሆነ",
  filterOperatorNot: "ያልሆነ",
  filterOperatorAfter: "is after",
  filterOperatorOnOrAfter: "is on or after",
  filterOperatorBefore: "is before",
  filterOperatorOnOrBefore: "is on or before",
  filterOperatorIsEmpty: "is empty",
  filterOperatorIsNotEmpty: "is not empty",
  filterOperatorIsAnyOf: "is any of",
  toolbarColumns: "አምድ",
  toolbarColumnsLabel: "አምድ ምረጥ",
  columnMenuLabel: "ምናሌ",
  columnMenuShowColumns: "አምድ አሳይ",
  columnMenuFilter: "ማጣሪያ",
  columnMenuHideColumn: "ደብቅ",
  columnMenuUnsort: "አለመደርደር",
  columnMenuSortAsc: "በመውጣት ደርድር",
  columnMenuSortDesc: "በመውረድ ደርድር",
  toolbarFilters: "ማጣሪያ",
  toolbarFiltersLabel: "ማጣሪያ ምረጥ",
  toolbarFiltersTooltipHide: "ማጣሪያ አሳይ",
  toolbarFiltersTooltipShow: "ማጣሪያ ደብቅ",
};

export const dataGridLocaleEn = {
  noRowsLabel: "No rows",
  noResultsOverlayLabel: "No results found.",
  errorOverlayDefaultLabel: "An error occurred.",

  // Density selector toolbar button text
  toolbarDensity: "Density",
  toolbarDensityLabel: "Density",
  toolbarDensityCompact: "Compact",
  toolbarDensityStandard: "Standard",
  toolbarDensityComfortable: "Comfortable",

  // Columns selector toolbar button text
  toolbarColumns: "Columns",
  toolbarColumnsLabel: "Select columns",

  // Filters toolbar button text
  toolbarFilters: "Filters",
  toolbarFiltersLabel: "Show filters",
  toolbarFiltersTooltipHide: "Hide filters",
  toolbarFiltersTooltipShow: "Show filters",
  toolbarFiltersTooltipActive: (count) =>
    count !== 1 ? `${count} active filters` : `${count} active filter`,

  // Quick filter toolbar field
  toolbarQuickFilterPlaceholder: "Search…",
  toolbarQuickFilterLabel: "Search",
  toolbarQuickFilterDeleteIconLabel: "Clear",

  // Export selector toolbar button text
  toolbarExport: "Export",
  toolbarExportLabel: "Export",
  toolbarExportCSV: "Download as CSV",
  toolbarExportPrint: "Print",
  toolbarExportExcel: "Download as Excel",

  // Columns panel text
  columnsPanelTextFieldLabel: "Find column",
  columnsPanelTextFieldPlaceholder: "Column title",
  columnsPanelDragIconLabel: "Reorder column",
  columnsPanelShowAllButton: "Show all",
  columnsPanelHideAllButton: "Hide all",

  // Filter panel text
  filterPanelAddFilter: "Add filter",
  filterPanelDeleteIconLabel: "Delete",
  filterPanelLinkOperator: "Logic operator",
  filterPanelOperators: "Operator", // TODO v6: rename to filterPanelOperator
  filterPanelOperatorAnd: "And",
  filterPanelOperatorOr: "Or",
  filterPanelColumns: "Columns",
  filterPanelInputLabel: "Value",
  filterPanelInputPlaceholder: "Filter value",

  // Filter operators text
  filterOperatorContains: "contains",
  filterOperatorEquals: "equals",
  filterOperatorStartsWith: "starts with",
  filterOperatorEndsWith: "ends with",
  filterOperatorIs: "is",
  filterOperatorNot: "is not",
  filterOperatorAfter: "is after",
  filterOperatorOnOrAfter: "is on or after",
  filterOperatorBefore: "is before",
  filterOperatorOnOrBefore: "is on or before",
  filterOperatorIsEmpty: "is empty",
  filterOperatorIsNotEmpty: "is not empty",
  filterOperatorIsAnyOf: "is any of",

  // Filter values text
  filterValueAny: "any",
  filterValueTrue: "true",
  filterValueFalse: "false",

  // Column menu text
  columnMenuLabel: "Menu",
  columnMenuShowColumns: "Show columns",
  columnMenuFilter: "Filter",
  columnMenuHideColumn: "Hide",
  columnMenuUnsort: "Unsort",
  columnMenuSortAsc: "Sort by ASC",
  columnMenuSortDesc: "Sort by DESC",

  // Column header text
  columnHeaderFiltersTooltipActive: (count) =>
    count !== 1 ? `${count} active filters` : `${count} active filter`,
  columnHeaderFiltersLabel: "Show filters",
  columnHeaderSortIconLabel: "Sort",

  // Rows selected footer text
  footerRowSelected: (count) =>
    count !== 1
      ? `${count.toLocaleString()} rows selected`
      : `${count.toLocaleString()} row selected`,

  // Total row amount footer text
  footerTotalRows: "Total Rows:",

  // Total visible row amount footer text
  footerTotalVisibleRows: (visibleCount, totalCount) =>
    `${visibleCount.toLocaleString()} of ${totalCount.toLocaleString()}`,

  // Checkbox selection text
  checkboxSelectionHeaderName: "Checkbox selection",
  checkboxSelectionSelectAllRows: "Select all rows",
  checkboxSelectionUnselectAllRows: "Unselect all rows",
  checkboxSelectionSelectRow: "Select row",
  checkboxSelectionUnselectRow: "Unselect row",

  // Boolean cell text
  booleanCellTrueLabel: "yes",
  booleanCellFalseLabel: "no",

  // Actions cell more text
  actionsCellMore: "more",

  // Column pinning text
  pinToLeft: "Pin to left",
  pinToRight: "Pin to right",
  unpin: "Unpin",

  // Tree Data
  treeDataGroupingHeaderName: "Group",
  treeDataExpand: "see children",
  treeDataCollapse: "hide children",

  // Grouping columns
  groupingColumnHeaderName: "Group",
  groupColumn: (name) => `Group by ${name}`,
  unGroupColumn: (name) => `Stop grouping by ${name}`,

  // Master/detail
  detailPanelToggle: "Detail panel toggle",
  expandDetailPanel: "Expand",
  collapseDetailPanel: "Collapse",

  // Used core components translation keys
  MuiTablePagination: {},

  // Row reordering text
  rowReorderingHeaderName: "Row reordering",

  // Aggregation
  aggregationMenuItemHeader: "Aggregation",
  aggregationFunctionLabelSum: "sum",
  aggregationFunctionLabelAvg: "avg",
  aggregationFunctionLabelMin: "min",
  aggregationFunctionLabelMax: "max",
  aggregationFunctionLabelSize: "size",
};

export const dataGridLocaleOr = {
  filterOperatorContains: "kan qabu",
  filterOperatorEquals: "qixa",
  filterOperatorStartsWith: "kan jalqabu",
  filterOperatorEndsWith: "kan dhumatu",
  filterOperatorIs: "kan ta'e",
  filterOperatorNot: "kan hin taane",
  filterOperatorAfter: "is after",
  filterOperatorOnOrAfter: "is on or after",
  filterOperatorBefore: "is before",
  filterOperatorOnOrBefore: "is on or before",
  filterOperatorIsEmpty: "is empty",
  filterOperatorIsNotEmpty: "is not empty",
  filterOperatorIsAnyOf: "is any of",
  toolbarColumns: "አምድ",
  toolbarColumnsLabel: "አምድ ምረጥ",
  columnMenuLabel: "ምናሌ",
  columnMenuShowColumns: "አምድ አሳይ",
  columnMenuFilter: "ማጣሪያ",
  columnMenuHideColumn: "ደብቅ",
  columnMenuUnsort: "አለመደርደር",
  columnMenuSortAsc: "በመውጣት ደርድር",
  columnMenuSortDesc: "በመውረድ ደርድር",
  toolbarFilters: "ማጣሪያ",
  toolbarFiltersLabel: "ማጣሪያ ምረጥ",
  toolbarFiltersTooltipHide: "ማጣሪያ አሳይ",
  toolbarFiltersTooltipShow: "ማጣሪያ ደብቅ",
};

export const dataGridLocaleTi = {
  filterOperatorContains: "የያዘ",
  filterOperatorEquals: "እኩል",
  filterOperatorStartsWith: "ሚጀምር",
  filterOperatorEndsWith: "በ ሚያልቅ",
  filterOperatorIs: "የሆነ",
  filterOperatorNot: "ያልሆነ",
  filterOperatorAfter: "is after",
  filterOperatorOnOrAfter: "is on or after",
  filterOperatorBefore: "is before",
  filterOperatorOnOrBefore: "is on or before",
  filterOperatorIsEmpty: "is empty",
  filterOperatorIsNotEmpty: "is not empty",
  filterOperatorIsAnyOf: "is any of",
  toolbarColumns: "አምድ",
  toolbarColumnsLabel: "አምድ ምረጥ",
  columnMenuLabel: "ምናሌ",
  columnMenuShowColumns: "አምድ አሳይ",
  columnMenuFilter: "ማጣሪያ",
  columnMenuHideColumn: "ደብቅ",
  columnMenuUnsort: "አለመደርደር",
  columnMenuSortAsc: "በመውጣት ደርድር",
  columnMenuSortDesc: "በመውረድ ደርድር",
  toolbarFilters: "ማጣሪያ",
  toolbarFiltersLabel: "ማጣሪያ ምረጥ",
  toolbarFiltersTooltipHide: "ማጣሪያ አሳይ",
  toolbarFiltersTooltipShow: "ማጣሪያ ደብቅ",
};
