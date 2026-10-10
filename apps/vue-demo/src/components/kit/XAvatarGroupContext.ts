/**
 * XAvatarGroup 上下文：头像组向子头像透传语义色与尺寸。
 * XAvatarGroup 提供，XAvatar 注入。
 */
import type { ComputedRef, InjectionKey } from 'vue'

export type AvatarColor = 'primary' | 'secondary' | 'neutral' | 'success' | 'info' | 'warning' | 'error'
export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

/** 头像组透传给子头像的语义色 */
export const XAvatarGroupColorKey: InjectionKey<ComputedRef<AvatarColor | undefined>> = Symbol('x-avatar-group-color')

/** 头像组透传给子头像的尺寸 */
export const XAvatarGroupSizeKey: InjectionKey<ComputedRef<AvatarSize | undefined>> = Symbol('x-avatar-group-size')
