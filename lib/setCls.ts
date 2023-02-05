interface ISetDynamicClsProps {
  stClasses: (string | undefined)[]
  dnClasses: string[][]
  conditions: boolean[]
}

export function setDynamicCls({ stClasses, dnClasses, conditions }: ISetDynamicClsProps) {
  const classes = stClasses.filter(cls => cls !== undefined)

  for (let i = 0;i < conditions.length;i++) {
    if (conditions[i]) {
      dnClasses[i].forEach(internalDnClass => classes.push(internalDnClass))
    }
  }

  return classes.join(' ')
}

export function setStaticCls(...classes: (string | undefined)[]) {
  return classes.filter((cls) => cls !== undefined).join(' ')
}