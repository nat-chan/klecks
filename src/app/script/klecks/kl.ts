import {klHistory} from './history/kl-history';
import {Popup, popup} from './ui/modals/popup';
import {dialogCounter} from './ui/modals/modal-count';
import {Checkbox} from './ui/base-components/checkbox';
import {input} from './ui/base-components/input';
import {Select} from './ui/base-components/select';
import {ImageToggle} from './ui/base-components/image-toggle';
import {ImageRadioList} from './ui/base-components/image-radio-list';
import {penPressureToggle} from './ui/base-components/pen-pressure-toggle';
import {PcSlider} from './ui/base-components/slider';
import {calcSliderFalloffFactor} from './ui/base-components/slider-falloff';
import {HexColorDialog} from './ui/base-components/color-slider-hex-dialog';
import {PcColorSlider} from './ui/base-components/color-slider';
import {PcSmallColorSlider} from './ui/base-components/color-slider-small';
import {PointSlider} from './ui/base-components/point-slider';
import {ColorOptions} from './ui/base-components/color-options';
import {Options} from './ui/base-components/options';
import {StatusOverlay} from './ui/components/status-overlay';
import {exportDialog} from './ui/modals/export-dialog-deprecated';
import {CropCopy} from './ui/components/crop-copy';
import {clipboardDialog} from './ui/modals/clipboard-dialog';
import {TabMenu} from './ui/components/tab-menu-deprecated';
import {pcLayerManager} from './ui/components/layer-manager';
import {WorkspaceSvgOverlay} from './canvas-ui/workspace-svg-overlay';
import {KlCanvasWorkspace} from './canvas-ui/canvas-workspace';
import {KlCanvasPreview} from './canvas-ui/canvas-preview';
import {FreeTransform} from './ui/components/free-transform';
import {FreeTransformCanvas} from './ui/components/free-transform-canvas';
import {Cropper} from './ui/components/cropper';
import {ProgressPopup} from './ui/modals/progress-popup';
import {LayerPreview} from './ui/components/layer-preview';
import {showSaveReminderToast} from './ui/components/show-reminder-toast';
import {FittedImage} from './ui/components/fitted-image';
import {showImportAsLayerDialog} from './ui/modals/show-import-as-layer-dialog';
import {PcImageDropper} from './ui/components/image-dropper';
import {OverlayToolspace} from './ui/components/overlay-toolspace';
import {ToolspaceTopRow} from './ui/components/toolspace-top-row';
import {ToolDropdown} from './ui/components/tool-dropdown';
import {ToolspaceToolRow} from './ui/components/toolspace-tool-row';
import {ToolspaceStabilizerRow} from './ui/components/toolspace-stabilizer-row';
import {TabRow} from './ui/components/tab-row';
import {HandUi} from './ui/tool-tabs/hand-ui';
import {FillUi} from './ui/tool-tabs/fill-ui';
import {TextUi} from './ui/tool-tabs/text-ui';
import {ShapeUi} from './ui/tool-tabs/shape-ui';
import {newImageDialog} from './ui/modals/new-image-dialog';
import {ToolspaceCollapser} from './ui/components/toolspace-collapser';
import {renderText} from './image-operations/render-text';
import {textToolDialog} from './ui/modals/text-tool-dialog';
import {showImportImageDialog} from './ui/modals/show-import-image-dialog';
import {floodFillBits} from './image-operations/flood-fill';
import * as PSD from './storage/psd';
import {drawShape, ShapeTool} from './image-operations/shape-tool';
import {KlCanvas} from './canvas/kl-canvas';
import * as indexedDb from './storage/indexed-db';
import {filterLib, filterLibStatus} from './filters/filters';
import {brushes} from './brushes/brushes';
import {brushesUI} from './brushes-ui/brushes-ui';
import {showIframePopup} from './ui/modals/show-iframe-popup';
import {RadioList} from './ui/base-components/radio-list';
import {BrowserStorageUi} from './ui/components/browser-storage-ui';
import {drawProject} from './canvas/draw-project';
import {ProjectStore} from './storage/project-store';
import {FileTab} from "./ui/tool-tabs/file-tab";
import {FilterTab} from "./ui/tool-tabs/filter-tab";
import {imgurUpload} from "./ui/components/imgur-upload";
import {loadAgPsd} from "./storage/ag-psd-wrapper";
import {SaveReminder} from "./ui/components/save-reminder";
import {SaveToComputer} from "./storage/save-to-computer";
import {UndoRedoCatchup} from "./history/undo-redo-catchup";
import {setDbName} from './storage/indexed-db';

/**
 * paint tool functionality
 */
export const KL = {

    // --- brushes ---
    brushes,
    brushesUI,

    // --- canvas ---
    KlCanvas,
    drawProject,

    // --- canvas ui ---
    WorkspaceSvgOverlay,
    KlCanvasWorkspace,
    KlCanvasPreview,

    // --- filters ---
    filterLibStatus,
    filterLib,

    // --- history ---
    UndoRedoCatchup,

    // --- image operations ---
    renderText,
    floodFillBits,
    ShapeTool,
    drawShape,

    // --- storage ---
    PSD,
    setDbName,
    indexedDb,
    ProjectStore,
    loadAgPsd,
    SaveToComputer,

    // --- ui - base components ---
    calcSliderFalloffFactor,
    CheckBox: Checkbox,
    input,
    Select,
    ImageToggle,
    ImageRadioList,
    RadioList,
    penPressureToggle,
    PcSlider,
    HexColorDialog,
    PcColorSlider,
    PcSmallColorSlider,
    PointSlider,
    ColorOptions,
    Options,

    // --- ui - components ---
    StatusOverlay,
    CropCopy,
    TabMenu,
    pcLayerManager,
    FreeTransform,
    FreeTransformCanvas,
    Cropper,
    LayerPreview,
    showSaveReminderToast,
    FittedImage,
    PcImageDropper,
    OverlayToolspace,
    ToolspaceTopRow,
    ToolDropdown,
    ToolspaceToolRow,
    ToolspaceStabilizerRow,
    TabRow,
    ToolspaceCollapser,
    BrowserStorageUi,
    imgurUpload,
    SaveReminder,

    // --- ui - modals ---
    dialogCounter,
    popup,
    Popup,
    exportDialog,
    clipboardDialog,
    ProgressPopup,
    showImportAsLayerDialog,
    newImageDialog,
    textToolDialog,
    showImportImageDialog,
    showIframePopup,

    // --- ui - tool tabs ---
    HandUi,
    FillUi,
    TextUi,
    ShapeUi,
    FileTab,
    FilterTab,


    klHistory,
};