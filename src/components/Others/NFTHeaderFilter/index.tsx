"use client";
import { Common } from "@/components/Common";
import { Input } from "@/components/ui/input";
import { MdFilterList, MdFilterListOff } from "react-icons/md";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formFilters, type FormDataFilters } from "./schemasFilters";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import usePostStore from "@/stores/post.store";

interface INFTHeaderFilterProps {
  iconTitle: React.ReactNode;
  title: string;
}

function NFTHeaderFilter({ iconTitle, title }: INFTHeaderFilterProps) {
  const { setSearch, setFilter, search, filter } = usePostStore();
  const { control, watch, setValue } = useForm<FormDataFilters>({
    resolver: zodResolver(formFilters),
    defaultValues: {
      search: "",
      filter: "all",
    },
    mode: "onChange",
  });

  const isEmpty = !search && !(filter !== "all");
  console.log(isEmpty);

  const handleCleanFilters = () => {
    setValue("search", "");
    setValue("filter", "all");
    setFilter("all");
    setSearch("");
  };

  const handleSetFilters = () => {
    setSearch(watch("search"));
    setFilter(watch("filter"));
  };

  return (
    <div className="flex w-full flex-col justify-between md:flex-row">
      <Common.CommonTitleSection>
        {iconTitle} {title}
      </Common.CommonTitleSection>

      <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
        <Controller
          control={control}
          name="filter"
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="w-[265px] text-lootlab-font-base">
                <SelectValue placeholder="Selecione um Filtro" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Filtro</SelectLabel>
                  <SelectItem value="recent">Mais Recentes</SelectItem>
                  <SelectItem value="oldest">Mais Antigos</SelectItem>
                  <SelectItem value="order">Ordem Alfabética</SelectItem>
                  <SelectItem value="all">Sem filtros</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
        <Controller
          control={control}
          name="search"
          render={({ field }) => (
            <Input
              onKeyDown={({ key }) => {
                if (key === "Enter") {
                  handleSetFilters();
                }
              }}
              onChange={field.onChange}
              value={field.value}
              className="text-lootlab-font-base"
            />
          )}
        />

        {isEmpty && (
          <Button onClick={handleSetFilters}>
            <MdFilterList className="h-12 w-12 text-lootlab-font-base" />
          </Button>
        )}

        {!isEmpty && (
          <Button onClick={handleCleanFilters}>
            <MdFilterListOff className="h-12 w-12 text-lootlab-font-base" />
          </Button>
        )}
      </div>
    </div>
  );
}

export default NFTHeaderFilter;
