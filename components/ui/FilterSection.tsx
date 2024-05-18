"use client";

import {
  ReadonlyURLSearchParams,
  useSearchParams,
  useRouter,
} from "next/navigation";
import React, {
  ChangeEvent,
  ComponentPropsWithRef,
  ReactNode,
  useEffect,
  useState,
} from "react";

const colors = ["Red", "Green", "Blue"];
const categories = ["Men", "Women"];
const sizes = ["s", "m", "l"];
const sortingOrder = ["Newest", "Price Low-High", "Price High-Low"];

const filterOptions = [
  {
    id: "sort",
    title: "Sorting Order",
    options: sortingOrder,
    type: "radio",
  },
  {
    id: "categories",
    title: "Categories",
    options: categories,
    type: "checkbox",
  },
  {
    id: "colors",
    title: "Colors",
    options: colors,
    type: "checkbox",
  },
  {
    id: "sizes",
    title: "Sizes",
    options: sizes,
    type: "checkbox",
  },
];

function checkValidQuery(queries: string[]) {
  return queries.filter((query) => query !== "").length > 0;
}

function convertValidStringQueries(queries: Record<string, string[]>) {
  let q = "";
  for (let [key, value] of Object.entries(queries)) {
    q = q + `${q === "" ? "" : "&"}${key}=${value}`;
  }
  return q;
}

export function convertStringToQueriesObject(
  searchParams: ReadonlyURLSearchParams
) {
  let selectedQueries: Record<string, string[]> = {};
  searchParams.forEach((values, key) => {
    const queries = values.split(",");
    if (selectedQueries[key]) {
      selectedQueries[key].push(...queries);
    } else {
      selectedQueries[key] = queries;
    }
  });
  return selectedQueries;
}

const FilterSection = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedFilterQueries, setSelectedFilterQueries] = useState<
    Record<string, string[]>
  >({});

  useEffect(() => {
    const paramsObj = convertStringToQueriesObject(searchParams);
    setSelectedFilterQueries(paramsObj);
  }, [searchParams]);

  function handleSelectFilterOptions(e: ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.type;

    let selectedQueries = { ...selectedFilterQueries };

    if (selectedQueries[name]) {
      if (type === "radio") {
        selectedQueries[name] = [value];
      } else if (selectedQueries[name].includes(value)) {
        selectedQueries[name] = selectedQueries[name].filter(
          (query) => query !== value
        );
        if (!checkValidQuery(selectedQueries[name])) {
          delete selectedQueries[name]; // remove the key if it has no values
        }
      } else {
        selectedQueries[name].push(value);
      }
    } else {
      selectedQueries[name] = [value];
    }

    router.push(`/?${convertValidStringQueries(selectedQueries)}`, {
      scroll: false,
    });
  }

  function isChecked(id: string, option: string) {
    return (
      Boolean(selectedFilterQueries[id]) &&
      selectedFilterQueries[id].includes(option.toLowerCase())
    );
  }

  return (
    <div className="col-span-2 space-y-6 sticky top-12 h-fit">
      {filterOptions.map(({ id, title, type, options }) => (
        <div className="border-b pb-4" key={id}>
          <p className="font-medium mb-4">{title}</p>
          <div className="space-y-2">
            {options.map((value) => (
              <CheckboxAndRadioGroup key={value}>
                <CheckboxAndRadioItem
                  type={type}
                  name={id}
                  id={value.toLowerCase().trim()}
                  label={value}
                  value={value.toLowerCase().trim()}
                  checked={isChecked(id, value)}
                  onChange={handleSelectFilterOptions}
                />
              </CheckboxAndRadioGroup>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

interface ICheckboxAndRadioGroup {
  children: ReactNode;
}

function CheckboxAndRadioGroup({ children }: ICheckboxAndRadioGroup) {
  return <div className="flex items-center gap-4">{children}</div>;
}

interface ICheckboxAndRadioItem extends ComponentPropsWithRef<"input"> {
  label: string;
}

function CheckboxAndRadioItem({ id, label, ...props }: ICheckboxAndRadioItem) {
  return (
    <>
      <input id={id} className="w-4 h-4 shrink-0" {...props} />
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
    </>
  );
}

export default FilterSection;
