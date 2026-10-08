/**
 * XAvatarGroup 上下文：头像组向子头像透传语义色。
 * XAvatarGroup 提供，XAvatar 注入。
 */
import type { ComputedRef, InjectionKey } from 'vue'

export type AvatarColor = 'primary' | 'secondary' | 'neutral' | 'success' | 'info' | 'warning' | 'error'

/** 头像组透传给子头像的语义色 */
export const XAvatarGroupColorKey: InjectionKey<ComputedRef<AvatarColor | undefined>> = Symbol('x-avatar-group-color')
