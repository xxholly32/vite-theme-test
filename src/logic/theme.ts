import { replaceStyleVariables } from 'vite-plugin-theme/es/client';
import { useStorage } from '@vueuse/core'
import { ref, watchEffect } from 'vue'

const primary = "#e72528"

export function useTheme() {
  const theme = ref(localStorage.getItem('theme-schema') || primary)
  useStorage('theme-schema', theme.value)

  watchEffect(() => {
    changeTheme(theme.value)
  });
  return theme
}

export async function changeTheme(color: string) {
  return await replaceStyleVariables({
    colorVariables: [color],
  });
}
