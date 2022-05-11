
export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    html: {
        prettier: {
            tabWidth: 4,
            useTabs: false,
            htmlWhitespaceSensitivity: 'strict',
        },
    },
    grid: {
        gridOn: false,
        columns: 12,
        gap: '15px',
        gutter: '15px',
        maxWidth: '1140px',
        guidesColor: 'rgba(255, 240, 0, 0.15)'
      },
}