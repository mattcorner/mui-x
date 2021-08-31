import { GridComponentProps } from '../../_modules_/grid/GridComponentProps';
import { useGridClipboard } from '../../_modules_/grid/hooks/features/clipboard/useGridClipboard';
import { useGridColumnMenu } from '../../_modules_/grid/hooks/features/columnMenu/useGridColumnMenu';
import { useGridColumnReorder } from '../../_modules_/grid/hooks/features/columnReorder/useGridColumnReorder';
import { useGridColumnResize } from '../../_modules_/grid/hooks/features/columnResize/useGridColumnResize';
import { useGridColumns } from '../../_modules_/grid/hooks/features/columns/useGridColumns';
import { useGridControlState } from '../../_modules_/grid/hooks/features/core/useGridControlState';
import { useGridDensity } from '../../_modules_/grid/hooks/features/density/useGridDensity';
import { useGridCsvExport } from '../../_modules_/grid/hooks/features/export/useGridCsvExport';
import { useGridFilter } from '../../_modules_/grid/hooks/features/filter/useGridFilter';
import { useGridFocus } from '../../_modules_/grid/hooks/features/focus/useGridFocus';
import { useGridInfiniteLoader } from '../../_modules_/grid/hooks/features/infiniteLoader/useGridInfiniteLoader';
import { useGridKeyboard } from '../../_modules_/grid/hooks/features/keyboard/useGridKeyboard';
import { useGridKeyboardNavigation } from '../../_modules_/grid/hooks/features/keyboard/useGridKeyboardNavigation';
import { useLocaleText } from '../../_modules_/grid/hooks/features/localeText/useLocaleText';
import { useGridPage } from '../../_modules_/grid/hooks/features/pagination/useGridPage';
import { useGridPageSize } from '../../_modules_/grid/hooks/features/pagination/useGridPageSize';
import { useGridPreferencesPanel } from '../../_modules_/grid/hooks/features/preferencesPanel/useGridPreferencesPanel';
import { useGridEditRows } from '../../_modules_/grid/hooks/features/rows/useGridEditRows';
import { useGridFreezeRows } from '../../_modules_/grid/hooks/features/rows/useGridFreezeRows';
import { useGridParamsApi } from '../../_modules_/grid/hooks/features/rows/useGridParamsApi';
import { useGridRows } from '../../_modules_/grid/hooks/features/rows/useGridRows';
import { useGridSelection } from '../../_modules_/grid/hooks/features/selection/useGridSelection';
import { useGridSorting } from '../../_modules_/grid/hooks/features/sorting/useGridSorting';
import { useGridComponents } from '../../_modules_/grid/hooks/features/useGridComponents';
import { useGridVirtualRows } from '../../_modules_/grid/hooks/features/virtualization/useGridVirtualRows';
import { useApi } from '../../_modules_/grid/hooks/root/useApi';
import { useGridEvents } from '../../_modules_/grid/hooks/root/useGridEvents';
import { useGridContainerProps } from '../../_modules_/grid/hooks/root/useGridContainerProps';
import { useErrorHandler } from '../../_modules_/grid/hooks/utils/useErrorHandler';
import { useLoggerFactory } from '../../_modules_/grid/hooks/utils/useLogger';
import { useOptionsProp } from '../../_modules_/grid/hooks/utils/useOptionsProp';
import { useRenderInfoLog } from '../../_modules_/grid/hooks/utils/useRenderInfoLog';
import { useGridResizeContainer } from '../../_modules_/grid/hooks/utils/useGridResizeContainer';
import { useStateProp } from '../../_modules_/grid/hooks/utils/useStateProp';
import { GridApiRef } from '../../_modules_/grid/models/api/gridApiRef';

export const useDataGridProComponent = (apiRef: GridApiRef, props: GridComponentProps) => {
  useLoggerFactory(apiRef, props);
  useApi(apiRef, props);
  useErrorHandler(apiRef, props);
  useGridControlState(apiRef, props);
  useOptionsProp(apiRef, props);
  useLocaleText(apiRef);
  useGridResizeContainer(apiRef, props);
  useGridFreezeRows(apiRef, props);
  useGridColumns(apiRef, props);
  useGridRows(apiRef, props);
  useGridParamsApi(apiRef);
  useGridEditRows(apiRef, props);
  useGridFocus(apiRef, props);
  useGridSelection(apiRef, props);
  useGridSorting(apiRef, props);
  useGridPreferencesPanel(apiRef);
  useGridFilter(apiRef, props);
  useGridDensity(apiRef, props);
  useGridContainerProps(apiRef, props);
  useGridColumnReorder(apiRef, props);
  useGridColumnResize(apiRef, props);
  useGridPageSize(apiRef, props);
  useGridPage(apiRef, props);
  useGridVirtualRows(apiRef, props);
  useGridColumnMenu(apiRef);
  useGridKeyboard(apiRef);
  useGridKeyboardNavigation(apiRef, props);
  useGridCsvExport(apiRef);
  useGridInfiniteLoader(apiRef, props);
  useGridClipboard(apiRef);
  useGridComponents(apiRef, props);
  useGridEvents(apiRef, props);
  useStateProp(apiRef, props);
  useRenderInfoLog(apiRef);
};