---
title: React Date Picker（日期选择器）组件
components: DateCalendar, DatePicker, DesktopDatePicker, DayCalendarSkeleton, MobileDatePicker, MonthCalendar, PickersDay, StaticDatePicker, YearCalendar
githubLabel: 'component: DatePicker'
packageName: '@mui/x-date-pickers'
materialDesign: https://material.io/components/date-pickers
---

# Date Picker 日期选择器

<p class="description">日期选择器可以让用户选择日期。</p>

日期选择器可以让用户选择日期。 该组件的显示方式如下：

- 手机端的对话框
- 桌面端输入框的下拉列表中

## 基本用法

The date picker is rendered as a modal dialog on mobile, and a textbox with a popup on desktop.

{{"demo": "BasicDatePicker.js"}}

## 静态模式

It's possible to render any date picker without the modal/popover and text field. 这样的话就可以帮助进一步定制弹出提示/模态框的容器。 这样的话就可以帮助进一步定制弹出提示/模态框的容器。

{{"demo": "StaticDatePickerDemo.js", "bg": true}}

## 响应式

日期选择器组件是为它所运行的设备而设计和优化的。

- The `MobileDatePicker` component works best for touch devices and small screens.
- The `DesktopDatePicker` component works best for mouse devices and large screens.

By default, the `DatePicker` component renders the desktop version if the media query [`@media (pointer: fine)`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer) matches. 你也可以使用 `desktopModeMediaQuery` 属性来自定义它。 This can be customized with the `desktopModeMediaQuery` prop.

{{"demo": "ResponsiveDatePickers.js"}}

## Form props 表单的属性

The date picker component can be disabled or read-only.

{{"demo": "FormPropsDatePickers.js"}}

## Localization 本地化

你可以使用 `LocalizationProvider` 来改变用于渲染日期选择的 date-library（日期引擎）本地化设置。 下面是一个更改 `date-fns` 适配器本地化设置的示例：

{{"demo": "LocalizedDatePicker.js"}}

## Jalali calendar system

Install `date-fns-jalali` and use `@date-io/date-fns-jalali` adapter to support [Jalali calendar](https://en.wikipedia.org/wiki/Jalali_calendar).

{{"demo": "JalaliDatePicker.js"}}

## 试玩例子

你可以将 `year`，`month` 和 `date` 进行组合显示。 视图的显示顺序是由被包含在 `views` 数组的顺序来决定的。

{{"demo": "ViewsDatePicker.js"}}

## 横竖方向

For ease of use, the date picker will automatically change the layout between portrait and landscape by subscription to the `window.orientation` change. 你可以使用 `orientation` 属性来强行指定布局。 你可以使用 `orientation` 属性来强行指定布局。

{{"demo": "StaticDatePickerLandscape.js", "bg": true}}

## 子组件

Some lower-level sub-components (`DateCalendar`, `MonthCalendar`, and `YearCalendar`) are also exported. 这些都是在没有包装器或外部逻辑（屏蔽输入、日期值解析和验证等）的情况下渲染的。 这些都是在没有包装器或外部逻辑（屏蔽输入、日期值解析和验证等）的情况下渲染的。

{{"demo": "SubComponentsCalendars.js"}}

## 自定义输入组件

You can customize the rendering of the input with the `renderInput` prop. 请确保 `ref` 和 `inputProps` 都以正确的方式传入到所定制的输入组件。 请确保 `ref` 和 `inputProps` 都以正确的方式传入到所定制的输入组件。

{{"demo": "CustomInput.js"}}

## 自定义日期渲染

The displayed days are customizable with the `Day` component slot.
You can take advantage of the [PickersDay](/x/api/date-pickers/pickers-day/) component.

{{"demo": "CustomDay.js"}}

## 动态数据

有些时候可能有在日历中显示额外信息的需求。 下面是一个使用 `onMonthChange`、`loading` 和 `components.Day` 属性来预取并显示服务器端数据的例子。

{{"demo": "ServerRequestDatePicker.js"}}

## Helper text

You can show a helper text with the date format accepted.

{{"demo": "HelperText.js"}}
