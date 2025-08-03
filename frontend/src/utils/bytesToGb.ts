export const getBytesToGb = (
  usedBytes: number | bigint | undefined,
  availableBytes: number | bigint | undefined
) => {
  if (usedBytes === null || undefined || availableBytes === null || undefined)
    return { usedSpace: 0, availableSpace: 0, usedPercentage: 0 };
  const usedBytesNumber = Number(usedBytes);
  const avaliableBytesNumber = Number(availableBytes);
  console.log(avaliableBytesNumber);
  const BYTES_PER_GB = 1000000000;

  const usedSpace = usedBytesNumber / BYTES_PER_GB;

  const availableSpace = avaliableBytesNumber / BYTES_PER_GB;

  const usedPercentage = (usedBytesNumber / 100) * avaliableBytesNumber;

  return {
    usedSpace,
    availableSpace,
    usedPercentage,
  };
};
