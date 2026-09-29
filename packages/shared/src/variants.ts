/**
 * 变体语义：组件库统一的内置变体定义。
 * 语义色、尺寸、按钮样式与原型「二次封装 Encapsulation」一致。
 * 两份框架实现的 prop 类型都以本文件为唯一事实来源，由测试校验一致性。
 */

/** 语义色：primary | secondary | neutral | success | info | warning | error */
export const colorVariants = ["primary", "secondary", "neutral", "success", "info", "warning", "error"] as const;
export type ColorVariant = (typeof colorVariants)[number];

/** 尺寸：xs | sm | md | lg | xl */
export const sizeVariants = ["xs", "sm", "md", "lg", "xl"] as const;
export type SizeVariant = (typeof sizeVariants)[number];

/** 按钮预设样式：solid | outline | soft | ghost | subtle | link */
export const buttonVariantStyles = ["solid", "outline", "soft", "ghost", "subtle", "link"] as const;
export type ButtonVariantStyle = (typeof buttonVariantStyles)[number];

/** 头像形状 */
export const avatarShapes = ["circle", "square"] as const;
export type AvatarShape = (typeof avatarShapes)[number];

/** 分割线方向 */
export const separatorOrientations = ["horizontal", "vertical"] as const;
export type SeparatorOrientation = (typeof separatorOrientations)[number];

/** 骨架屏形状 */
export const skeletonVariants = ["text", "circle", "rect"] as const;
export type SkeletonVariant = (typeof skeletonVariants)[number];

/** 卡片尺寸 */
export const cardSizes = ["default", "small"] as const;
export type CardSize = (typeof cardSizes)[number];

/** 容器尺寸（最大宽度约束） */
export const containerSizes = ["xs", "sm", "md", "lg", "xl"] as const;
export type ContainerSize = (typeof containerSizes)[number];

/** 组件 API 统一透传说明：所有封装组件都支持 restProps 透传到原子组件 */
export const restPropsDoc = "透传原子组件 props";
