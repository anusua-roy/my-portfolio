import DetailsForm from "@/components/admin/forms/DetailsForm";
import ProjectsForm from "@/components/admin/forms/ProjectsForm";

export default function AdminContentArea({
  activeStep,
}: {
  activeStep: number;
}) {
  switch (activeStep) {
    case 0:
      return <DetailsForm />;
    case 1:
      return <ProjectsForm />;
    case 2:
      return (
        <div className="text-center py-10">
          Certifications Section - Coming Soon
        </div>
      );
    case 3:
      return (
        <div className="text-center py-10">Education Section - Coming Soon</div>
      );
    default:
      return null;
  }
}
