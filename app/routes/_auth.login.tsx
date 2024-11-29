import type { ActionFunctionArgs } from "@remix-run/node";
import { Form, useActionData, useSubmit, useNavigation, redirect } from "@remix-run/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// ui
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  Form as ShadcnForm,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { AuthError } from "~/components/auth/auth-error";
import { Loader } from "~/components/common/loader";
// zod
import { z } from "zod";

const loginSchema = z.object({
  username: z.string().min(1, "用户名不能为空"),
  password: z.string().min(6, "密码不能少于6个字符"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const rawFormData = Object.fromEntries(formData);

  try {
    const validatedFields = loginSchema.parse(rawFormData);

    // TODO: Add your actual login logic here
    // For example:
    // const user = await authenticateUser(validatedFields);

    // Temporary simulation of login
    if (validatedFields.username === "test" && validatedFields.password === "password123") {
      return redirect("/");
    }

    return { error: "用户名或密码错误" };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { errors: error.errors };
    }
    return { error: `网络错误：${(error as Error).message}` };
  }
}

export default function LoginPage() {
  const submit = useSubmit();
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  return (
    <main className="flex-1 flex items-center justify-center px-8">
      <div className="w-full max-w-sm space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">
            欢迎回来
          </h2>
          <p className="text-sm text-muted-foreground">
            登录以访问您的账户
          </p>
        </div>

        <AuthError error={actionData?.error} />

        <Form onSubmit={form.handleSubmit((data) => submit(data, { method: "post" }))}>
          <ShadcnForm {...form}>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>用户名</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="请输入用户名"
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>密码</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="请输入密码"
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? <Loader size="sm" textPlacement="right" />
                  : "登录"
                }
              </Button>
            </div>
          </ShadcnForm>
        </Form>
      </div>
    </main>
  );
}
