import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/main.tsx'],
    outDir: 'dist',
    format: ['esm', 'cjs'],
    target: 'es2020',
    minify: true,
    sourcemap: true,
    dts: true, // Gera arquivos de declaração de tipos
    clean: true, // Limpa o diretório de saída antes de construir
});
